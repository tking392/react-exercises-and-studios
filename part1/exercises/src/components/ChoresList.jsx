import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {
   return <div>
      <h3 className = {classes.choresHeading}>Today's Chores</h3>
         <p>
            <ul>
               <li className = {classes.choresText}>Wash Dishes</li>
               <li className = {classes.choresText}>Sweep Stairs</li>
            </ul>
         </p>
      </div>;
}