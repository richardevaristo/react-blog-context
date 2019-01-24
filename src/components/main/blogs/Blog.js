import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="hero">
            <div className="hero-body">
                <div className="hero-content">
                    <h1 className="title">
                        Blog Post 1
                    </h1>
                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <p>
                                    Written on January 21, 2019 by {'  '}
                                    <a href="#">Richard Evaristo</a>
                                </p>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
          </div>
          <div className="hero">
            <div className="hero-body">
                <div className="hero-content">
                    <h2 className="subtitle">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, quam. Animi quia asperiores illo. Nam, rem maiores doloribus expedita harum sed minus aperiam ab ratione nulla, nihil voluptatibus debitis tempore sint iste ipsam, sapiente totam veritatis. Voluptates culpa eius facilis saepe blanditiis velit, et amet eum dolorum porro voluptatem illum! Ex corrupti voluptate explicabo consequatur architecto, recusandae expedita minima nihil aliquam rerum saepe ullam ea quibusdam nisi corporis veniam quisquam vitae ipsum iure nostrum asperiores beatae tempora! Quod voluptatum reprehenderit tempore aspernatur similique architecto nisi. Officia mollitia odit voluptatibus nam ex accusantium, quam voluptate animi ullam corporis. Consequuntur, non cupiditate.
                    </h2>
                </div>
            </div>
          </div>
          <div className="box">
            <div className="comments">
                <div className="number-comments">
                    <strong>10 Comments <i className="fa fa-caret"></i></strong>
                </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
