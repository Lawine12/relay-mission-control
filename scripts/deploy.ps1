Write-Host ""
Write-Host "Building Relay Mission Control..."
Write-Host ""

npm run build

if ($LASTEXITCODE -ne 0) {
    exit 1
}

$source = "custom_components\relay_mission_control\www\relay.js"

$destination = "\\homeassistant\config\custom_components\relay_mission_control\www\relay.js"

Copy-Item $source $destination -Force

Write-Host ""
Write-Host "Deployment complete!"