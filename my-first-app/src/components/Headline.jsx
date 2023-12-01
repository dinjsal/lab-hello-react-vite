import React from 'react'

function Headline() {
  return (
    <div class="row align-items-start" className="headline">
    <div class="col displayed">
    <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use <br />
        the most popular frontend library,<br />
        and become a super Ninja developer.</p>
        <button>Awesome!</button>
    </div>
    <div class="col hidden">
        <p>Say hello to ReactJS</p>
        <p>You will learn how to use</p>
        <p>the most popular frontend library,</p>
        <p>and become a super Ninja developer.</p>
        <button><p>Awesome!</p></button>
    </div>
    <div class="col hidden">
        <p>You will learn how to use</p>
        <p>the most popular frontend library,</p>
        <p>and become a super Ninja developer.</p>
        <button>Awesome!</button>
    </div>
  </div>
  )
}

export default Headline