import css from "./Fab.module.css";

export default function Fab({children, ...props}) {
  return (
    <div className={css.fab} {...props}> {children} </div>
  )
}