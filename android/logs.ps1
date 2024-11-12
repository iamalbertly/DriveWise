# Save this script as "RunBuildInfo.ps1" and run it in PowerShell
# Ensure PowerShell is running with appropriate permissions to execute the script

# Clear the screen

# Define a function to run each command and display it in a terminal-like format
function Run-Command {
    param (
        [string]$Command
    )
    # Display the command as if typed into the console
    Write-Output "`nPS C:\Users\hp\Documents\GitHub\DriveWise> $Command"
    # Execute the command
    Invoke-Expression $Command
}

# Run commands in sequence as if they were typed into the terminal
Run-Command "cd .. && npx react-native info"
Run-Command "Get-Content .\package.json"
Run-Command "Get-Content .\react-native.config.js"
Run-Command "cd .\android\ && Get-Content .\settings.gradle"
Run-Command "Get-Content .\gradle.properties"
Run-Command "Get-Content .\build.gradle"
Run-Command "Get-Content .\app\build.gradle"
Run-Command "Get-Content .\app\src\main\java\com\drivewise\MainActivity.kt"
Run-Command "Get-Content .\app\src\main\java\com\drivewise\MainApplication.kt"