package com.drivewise

import android.os.Bundle
import android.util.Log
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint
import com.facebook.react.defaults.DefaultReactActivityDelegate
// Removed deprecated import
// import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView

class MainActivity : ReactActivity() {
    companion object {
        private const val TAG = "DriveWise_MainActivity"
    }

    override fun getMainComponentName(): String = "DriveWise"

    // Remove the override of createReactActivityDelegate if it's not needed
    override fun createReactActivityDelegate(): ReactActivityDelegate =
        object : DefaultReactActivityDelegate(
            this,
            mainComponentName,
            DefaultNewArchitectureEntryPoint.fabricEnabled
        ) {
            // Remove the override of createRootView()
            // If you have no other customizations, you can remove this entire createReactActivityDelegate() method
        }

    // ... rest of your code
}
