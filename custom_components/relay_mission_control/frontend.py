from __future__ import annotations

from pathlib import Path

from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant

from .const import DOMAIN

async def async_setup_frontend(hass):
    root = Path(__file__).parent

    await hass.http.async_register_static_paths(
        [
            StaticPathConfig(
                url_path=f"/api/{DOMAIN}",
                path=str(root / "www"),
                cache_headers=False,
            )
        ]
    )