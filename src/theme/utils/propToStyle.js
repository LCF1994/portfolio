export default function propToStyle(propName) {

    return (props) => {
          return {
            [propName]: props[propName],
          };
    }    
}
