/**
    * @description      : 
    * @author           : admin
    * @group            : 
    * @created          : 17/06/2022 - 16:28:07
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/06/2022
    * - Author          : admin
    * - Modification    : 
**/
import React from 'react'
export default function NavigationBar() {
  return (
    <>
        <div className='primary-400 nav '>
            <img src={require('../img/icon02.jpeg')} className='icon' ></img>
            <div className='primary-800-text navItem '>
                <div className='navSubItem d-none'>
                     價錢
                </div>
                <div className='navSubItem d-none'>
                     Contact
                </div>
                
            </div>
        </div>
    </>
  )
}
