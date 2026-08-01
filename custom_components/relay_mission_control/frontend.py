"""Frontend registration."""

from __future__ import annotations

import logging

_LOGGER.info("Registering Relay static files")
_LOGGER.info("WWW path: %s", root / "www")

from pathlib import Path

from homeassistant.components.frontend import async_register_built_in_panel
from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant

_LOGGER = logging.getLogger(__name__)

from pathlib import Path

from homeassistant.components.frontend import async_register_built_in_panel
from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant

from .const import (
    DOMAIN,
    PANEL_ICON,
    PANEL_NAME,
    PANEL_TITLE,
)


async def async_setup_frontend(hass: HomeAssistant) -> None:
    """Register the frontend."""

    root = Path(__file__).parent
    _LOGGER.warning("Relay Mission Control: Registering frontend")
    _LOGGER.warning("Serving: %s", root / "www")    

    await hass.http.async_register_static_paths(
        [
            StaticPathConfig(
                f"/api/{DOMAIN}",
                str(root / "www"),
                False,
            )
        ]
    )

    async_register_built_in_panel(
        hass,
        component_name=PANEL_NAME,
        frontend_url_path=PANEL_NAME,
        sidebar_title=PANEL_TITLE,
        sidebar_icon=PANEL_ICON,
        config={
            "_panel_custom": {
                "name": PANEL_NAME,
                "embed_iframe": False,
                "trust_external": False,
            }
        },
    )