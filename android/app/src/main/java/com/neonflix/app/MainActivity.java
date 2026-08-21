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
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;
import java.io.ByteArrayInputStream;

public class MainActivity extends AppCompatActivity {

    // LIVE PUBLISHED WEBSITE URL (Auto-syncs any future updates without rebuilding APK)
    public static final String WEBVIEW_URL = "https://aadil12347.github.io/Hadi-movies-website-project/";

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
        webSettings.setJavaScriptCanOpenWindowsAutomatically(false);
        webSettings.setSupportMultipleWindows(false);

        // Swipe Pull-to-Refresh
        mSwipeRefresh.setOnRefreshListener(() -> mWebView.reload());
        mSwipeRefresh.setColorSchemeResources(R.color.neon_cyan, R.color.neon_purple);

        // Client for handling URL redirects within app
        mWebView.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                String url = request.getUrl().toString();
                if (AdBlocker.isAd(url)) {
                    return AdBlocker.createEmptyResource();
                }
                return super.shouldInterceptRequest(view, request);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                String url = request.getUrl().toString();
                if (AdBlocker.isAd(url)) {
                    return true;
                }
                if (url.startsWith("https://aadil12347.github.io/") || 
                    url.contains("localhost") || 
                    url.contains("192.168.") || 
                    url.contains("streamsrc.cc") || 
                    url.contains("peachify.pro") || 
                    url.contains("vidsrc") || 
                    url.contains("multiembed") ||
                    url.contains("youtube.com")) {
                    return false;
                }
                return true; // block other external redirects
            }

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

    private static class AdBlocker {
        private static final String[] AD_KEYWORDS = {
            "adsterra", "popads", "onclickads", "exoclick", "juicyads", "yllix",
            "yandex.ru/clck", "adservice.google", "doubleclick.net", "google-analytics",
            "analytics.js", "googletagmanager", "adsystem", "popunder", "adsterrapixel",
            "ad-delivery", "nativeads", "banners", "pop-under", "a.peachify.pro",
            "propellerads", "adcash", "popcash", "revenuehits", "bidvertiser",
            "adform", "smartadserver", "adnxs", "rubiconproject", "pubmatic",
            "openx", "casalemedia", "outbrain", "taboola", "criteo", "mgid"
        };

        public static boolean isAd(String url) {
            if (url == null) return false;
            String lowerUrl = url.toLowerCase();
            for (String keyword : AD_KEYWORDS) {
                if (lowerUrl.contains(keyword)) {
                    return true;
                }
            }
            return false;
        }

        public static WebResourceResponse createEmptyResource() {
            return new WebResourceResponse("text/plain", "utf-8", new ByteArrayInputStream("".getBytes()));
        }
    }
}
