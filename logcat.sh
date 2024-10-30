#!/bin/bash
echo "Starting DriveWise log capture..."
adb logcat -c  # Clear existing logs
adb logcat *:S DriveWise_MainActivity:D ReactNative:D ReactNativeJS:D AndroidRuntime:E *:F 