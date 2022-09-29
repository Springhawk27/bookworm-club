import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <section className="blogs">
                <div className="blogs-heading">
                    <h2>Our Top Blog Posts Of The Day</h2>
                    <p className="blogs-heading-text">Need some information? No worries we have so many questions answered</p>
                </div>
                <div className="blog-posts">
                    <div className="blog-card">
                        <div>
                            <h5 className="card-title">	How does react work?</h5>
                            <p className="card-text">
                                <strong>React</strong> is an efficient, flexible and declarative Javascript library which is used to build user interfaces. It is the view of MVC. It divides the UI into small and reuseable pieces of code known as component. RTeact component works same as javascript functions as accept properties or props as arbitrary inputs <br /> <br />
                                To understand how it works we need to know JSX, virtual DOM and the actual DOM. <br /> <br />
                                JSX stands for JavaScript XML which provides a way to structure  component rendering. It is almost similar to HTML in appearance but it's not. Actually it provides a way which is called syntactic sugar which means it uses HTML like template syntax along with javascript. <br />
                                A JSX starts with an html like tag that gives us a familiar expression and an idea of what is happening in the code. But after compilation it converted to regular javascript. And under the hood babel actually handles this conversion which then later can be rendered by react. <br /> <br />
                                A virtual DOM is a representation of JavaScript’s actual or real DOM. It is lightweight compared to the real DOM and because of this it is faster than the actual DOM. <br />
                                Firstly, a virtual DOM has the same property as real DOM does but it cannot manipulate the DOM itself as real DOM does. <br />
                                Secondly a Manipulating real DOM is slower than a virtual DOM. For example, changing virtual DOM is kind of changing a blueprint rather than changing the actual object. <br />
                                The diff algorithm gives us the outcome of two different inputs. In react diff algorithm compares real DOM and the virtual DOM and calculates the changes if there’s any. If there are any changes then the real Dom will be updated..



                            </p>
                            <div className="card-footer">
                                <div className="">
                                    <div>
                                        <h5 className="author-title">Sajjad Mahmud</h5>
                                        <p className="author-date">12 September, 2022</p>
                                    </div>
                                </div>
                                <div className="views">

                                    <span className="views-count">Views: 3102</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div>
                            <h5 className="card-title">What are the differences between props and state?</h5>

                            <p className="card-text">
                                In react, a <strong>state</strong> is an object of the component which holds information that can change over time. <br /> <br />
                                In react, <strong>props</strong> is the data or simply the inputs which is used to pass data from one component to another component. The data or inputs can be a single value or an object containing multiple values. <br /> <br />
                                We can pass data by using props but this method is unidirectional and means  one way from parent to child. It goes down from parent to child then again to another child. This is called props drilling. Props can be changed if the parent component changes its properties and renders again.

                            </p>
                            <div className="card-footer">
                                <div className="">
                                    <div>
                                        <h5 className="author-title">Istiak Ahmed</h5>
                                        <p className="author-date">15 September, 2022</p>
                                    </div>
                                </div>
                                <div className="views">

                                    <span className="views-count">Views: 2180</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div>
                            <h5 className="card-title">What else useEffect hook can do beside data loading?</h5>
                            <p className="card-text">
                                useEffect helps us to load data efficiently. Beside this we can use it in many ways. <br /> <br />
                                <strong>useEffect</strong> is  a hook in react which has the ability to perform side effects in functional components. We inject dependency if we want to re-run the effect when the values change over re-render. This dependecy can run in diffent ways such as:
                                <li>Side Effect triggers After Every Render</li>
                                <li>Side Effect triggers Only Once After Initial Render</li>
                                <li>Side Effect triggers After State Value Changes</li>
                                <li>Side Effect triggers After Props Value Change</li>
                            </p>
                            <div className="card-footer">
                                <div className="">
                                    <div>
                                        <h5 className="author-title">Sakib Khan</h5>
                                        <p className="author-date">11 September, 2022</p>
                                    </div>
                                </div>
                                <div className="views">

                                    <span className="views-count">Views: 3145</span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Blog;