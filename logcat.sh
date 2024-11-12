#!/bin/bash
echo "Starting DriveWise log capture..."
adb logcat -c  # Clear existing logs
adb logcat -v threadtime  # Capture detailed logs with timestamps