import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/pro-solid-svg-icons';


export function createIcon(icon: IconDefinition) {
    return function FAIcon(props: any) {
        return <FontAwesomeIcon icon={icon} {...props} />;
    };
}
