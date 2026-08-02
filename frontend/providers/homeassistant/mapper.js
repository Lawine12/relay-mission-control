/******************************************************************************
 *
 * Home Assistant Entity Mapper
 *
 ******************************************************************************/

export class HomeAssistantMapper {

    static entity(entity) {

        if (!entity) {

            return null;

        }

        return {

            id: entity.entity_id,

            state: entity.state,

            name:
                entity.attributes.friendly_name ??
                entity.entity_id,

            icon:
                entity.attributes.icon ??
                null,

            attributes:
                entity.attributes

        };

    }

}