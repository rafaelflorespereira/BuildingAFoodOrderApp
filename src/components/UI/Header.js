import classes from "./Header.module.css";
const MyHeader = () => {
  const departments = ["men", "women"];
  const categories = [
    "opposition",
    "split",
    "simplicity",
    "contain",
    "invisible",
    "site",
    "workshop",
    "pierce",
    "morale",
    "request",
    "inspector",
    "mail",
    "similar",
    "trunk",
    "baseball",
    "graphic",
    "radical",
    "relative",
    "fossil",
    "pipe",
  ];
  return (
    <div className={classes["header"]}>
      {departments.map((department) => (
        <li className={classes["header__department"]}>{department}</li>
      ))}
      <div className={classes["header__top"]}>
        {categories.reduce((accumulator, category) => {
          <li className={classes["header__category"]} style={`animation-delay: ${accumulator}`}>{category}</li>
          return accumulator + 0.1
        }
        )}
      </div>
    </div>
  );
};

export default MyHeader;
