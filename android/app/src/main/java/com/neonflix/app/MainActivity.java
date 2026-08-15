package com.neonflix.app;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Bitmap;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

public class MainActivity extends AppCompatActivity {

    // UPDATE THIS URL TO YOUR DEPLOYED LIVE WEBSITE OR LOCAL IP ADDRESS (e.g. http://192.168.1.10:5173 or https://your-app.vercel.app)
    public static final String WEBVIEW_URL = "http://192.168.1.10:5173/";

    private WebView mWebView;
    private SwipeRefreshLayout mSwipeRefresh;
    private FrameLayout mCustomViewContainer;
    private WebChromeClient.CustomViewCallback mCustomViewCallback;
    private View mCustomView;

    @Override
    @SuppressLint("SetJavaScriptEnabled")
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        mWebView = findViewById(R.id.webView);
        mSwipeRefresh = findViewById(R.id.swipeRefresh);
        mCustomViewContainer = findViewById(R.id.customViewContainer);

        // Configure WebView Settings for Max Performance & JS Execution
        WebSettings webSettings = mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setDatabaseEnabled(true);
        webSettings.setAllowFileAccess(true);
        webSettings.setAllowContentAccess(true);
        webSettings.setLoadWithOverviewMode(true);
        webSettings.setUseWideViewPort(true);
        webSettings.setMediaPlaybackRequiresUserGesture(false);
        webSettings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        webSettings.setCacheMode(WebSettings.LOAD_DEFAULT);

        // Swipe Pull-to-Refresh
        mSwipeRefresh.setOnRefreshListener(() -> mWebView.reload());
        mSwipeRefresh.setColorSchemeResources(R.color.neon_cyan, R.color.neon_purple);

        // Client for handling URL redirects within app
        mWebView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                super.onPageStarted(view, url, favicon);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                mSwipeRefresh.setRefreshing(false);
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                super.onReceivedError(view, request, error);
                mSwipeRefresh.setRefreshing(false);
            }
        });

        // Chrome client for Fullscreen video playback (YouTube / Server embeds)
        mWebView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onShowCustomView(View view, CustomViewCallback callback) {
                if (mCustomView != null) {
                    callback.onCustomViewHidden();
                    return;
                }
                mCustomView = view;
                mCustomViewContainer.addView(view);
                mCustomViewCallback = callback;
                mWebView.setVisibility(View.GONE);
                mCustomViewContainer.setVisibility(View.VISIBLE);
            }

            @Override
            public void onHideCustomView() {
                if (mCustomView == null) return;
                mWebView.setVisibility(View.VISIBLE);
                mCustomViewContainer.setVisibility(View.GONE);
                mCustomViewContainer.removeView(mCustomView);
                mCustomView = null;
                mCustomViewCallback.onCustomViewHidden();
            }
        });

        // Load Live Website
        if (isNetworkAvailable()) {
            mWebView.loadUrl(WEBVIEW_URL);
        } else {
            Toast.makeText(this, "No internet connection. Please check your network.", Toast.LENGTH_LONG).show();
            mWebView.loadUrl(WEBVIEW_URL);
        }
    }

    private boolean isNetworkAvailable() {
        ConnectivityManager connectivityManager = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo activeNetworkInfo = connectivityManager.getActiveNetworkInfo();
        return activeNetworkInfo != null && activeNetworkInfo.isConnected();
    }

    @Override
    public void onBackPressed() {
        if (mCustomView != null) {
            // Exit fullscreen video
            mWebView.getWebChromeClient().onHideCustomView();
        } else if (mWebView.canGoBack()) {
            mWebView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
