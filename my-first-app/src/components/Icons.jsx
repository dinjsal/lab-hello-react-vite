import React from 'react'

function Icons() {
  return (
    <div class="row align-items-center">
    <div class="col">
        <img src="./src/assets/tool.png" alt="tool" />
        <h5>Declarative</h5>
        <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div class="col">
        <img src="./src/assets/write.png" alt="write" />
        <h5>Components</h5>
        <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div class="col">
        <img src="./src/assets/gearMonitor.png" alt="gear-monitor" />
        <h5>Single-Way</h5>
        <p>A set of immutable values are passed to the components.</p>
    </div>
    <div class="col">
        <img src="./src/assets/code.png" alt="code" />
        <h5>JSX</h5>
        <p>Statically-typed, designed to run on modern browsers.</p>
    </div>
    </div>
  )
}

export default Icons