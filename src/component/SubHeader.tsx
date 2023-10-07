import React, {useState} from 'react'
// import styles from './SubHeader.module.scss'
import styles from '../styles/SubHeader.module.scss';
import type {FC} from 'react'

export type SubHeaderProps = {
  dropdown?: boolean,
  refName?: string
}

export const SubHeader: FC<SubHeaderProps> = ({
  dropdown,
  refName, 
  ...props 
}) =>{

  return (
    <>
      <div className={`${styles.dropdownMenu}`}>
        <div className={`${styles.subMenu1} ${refName == 'nav1' && dropdown ? styles.show : ""}`}>
          <a href=''>Item 1</a>
          <a href=''>Item 2</a>
          <a href=''>Item 3</a>
        </div>
        <div className={`${styles.subMenu2} ${refName == 'nav2' && dropdown ? styles.show : ""}`}>
          <a href=''>Item 4</a>
          <a href=''>Item 5</a>
          <a href=''>Item 6</a>
        </div>
        <div className={`${styles.subMenu3} ${refName == 'nav3' && dropdown ? styles.show : ""}`}>
          <a href=''>Item 7</a>
          <a href=''>Item 8</a>
          <a href=''>Item 9</a>
        </div>
      </div>
    </>
  )
}

export default SubHeader