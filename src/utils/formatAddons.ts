export default (val: string) => {
  return val.charAt(0).toUpperCase() + val.split(/(?=[A-Z])/).join(' ').toLowerCase().slice(1);
}
