from dataclasses import dataclass
from homeassistant.core import HomeAssistant

@dataclass(slots=True)
class Runtime:
    hass: HomeAssistant