package com.drivewise

import android.os.Bundle
import android.util.Log
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {
    companion object {
        private const val TAG = "DriveWise_MainActivity"
    }

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    override fun getMainComponentName(): String = "DriveWise"

    /**
     * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
     * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
     */
    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

    // Add onCreate method to catch potential crashes
    override fun onCreate(savedInstanceState: Bundle?) {
        try {
            Log.d(TAG, "Starting MainActivity onCreate")
            super.onCreate(savedInstanceState)
            Log.d(TAG, "MainActivity onCreate completed successfully")
        } catch (e: Exception) {
            Log.e(TAG, "Error in MainActivity onCreate: ${e.message}")
            e.printStackTrace()
            // Optionally crash the app with more details in dev mode
            if (BuildConfig.DEBUG) {
                throw e
            }
        }
    }

    override fun onResume() {
        super.onResume()
        Log.d(TAG, "MainActivity onResume called")
    }

    override fun onPause() {
        super.onPause()
        Log.d(TAG, "MainActivity onPause called")
    }
}
