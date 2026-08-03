"""
Relay Mission Control
Frontend registration
"""

from pathlib import Path

from homeassistant.core import HomeAssistant
from homeassistant.components.frontend import async_register_built_in_panel
from homeassistant.components.http import StaticPathConfig

from .const import (
    DOMAIN,
    PANEL_NAME,
    PANEL_TITLE,
    PANEL_ICON,
)


async def async_setup_frontend(hass: HomeAssistant) -> None:
    """Register the Relay Mission Control frontend."""

    # Prevent duplicate registration
    data = hass.data.setdefault(DOMAIN, {})

    if data.get("panel_registered"):
        return

    root = Path(__file__).parent

    # Serve frontend assets
    await hass.http.async_register_static_paths(
        [
            StaticPathConfig(
                url_path=f"/api/{DOMAIN}",
                path=str(root / "www"),
                cache_headers=False,
            )
        ]
    )

    # Register sidebar panel
    async_register_built_in_panel(
        hass,
        component_name="custom",
        frontend_url_path=PANEL_NAME,
        sidebar_title=PANEL_TITLE,
        sidebar_icon=PANEL_ICON,
        config={
            "_panel_custom": {
                "name": PANEL_NAME,
                "module_url": f"/api/{DOMAIN}/relay.js",
                "embed_iframe": False,
                "trust_external": False,
            }
        },
        require_admin=False,
    )

    data["panel_registered"] = True