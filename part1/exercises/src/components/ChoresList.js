import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div>
      <h3 className = {classes.choresHeading}>Chores to do</h3>
      <ol>
         <li className = {classes.choresText}>Vaccum the trash</li>
         <li className = {classes.choresText}>Feed the living room</li>
         <li className = {classes.choresText}>Take out the cat</li>
      </ol>
   </div>
   );
}