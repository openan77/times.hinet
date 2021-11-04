import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LabelIcon from '@material-ui/icons/Label';
import LinkIcon from '@material-ui/icons/Link';

import './list-item.styles.css'



const SimpleList = ({ title , author ,url }) => 
{
    return (
        <div className="list">
        <List component="nav" >
            <ListItem className="list-button" button onClick={ ()=> window.open(url, "_blank") }>
            <ListItemIcon className="list-icon">
                <LabelIcon style={{ color: "rgb(255, 235, 59)" }} />
            </ListItemIcon>
            <div className="title">  {title.length>=20 ? title.substring(0,19)+'...' : title} </div>
            <div className="author">  {author.length>=10 ? author.substring(0,9)+'...' : author} </div>
            <ListItemIcon className="list-icon">
                <LinkIcon style={{ color: "green" }} />
            </ListItemIcon >
            </ListItem>
        </List>
        </div>
    );
}

export default SimpleList;