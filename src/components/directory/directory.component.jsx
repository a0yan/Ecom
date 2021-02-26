import React from 'react'
import MenuItem from '../menuitem/menuitem.component'
import styles from './directory.module.css'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectSection} from '../../reducer/directory/directory-selector'
const directory=(props)=>{
        return(
            <div className={styles.directory_menu}>
            {props.section.map((item)=>(<MenuItem key={item.id} title={item.title.toUpperCase()} bg={item.imageUrl} size={item.size} linkUrl={item.linkUrl}/>
            ))}
            </div>
        )
}
const mapStatetoProps=createStructuredSelector({
  section:selectSection
})
export default connect(mapStatetoProps)(directory)
