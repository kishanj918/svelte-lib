import numeral from 'numeral';

const components: Record<string, number> = {};
export default function getComponentUUID(component: string) {
  if (component in components) {
    components[component] = components[component] + 1;
    return `${component}-${numeral(components[component]).format('0000')}`;
  } else {
    components[component] = 0;
    return `${component}-${numeral(0).format('0000')}`;
  }
}
