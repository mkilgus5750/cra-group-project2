import React, {Component} from 'react';
import Post from './Post.js';

import './BulletinBoard.css';

export default class BulletinBoard extends Component {
    render() {
        return (
            <div className="bulletin-group-container">
                <div className="Jacob-Madsen" id="Jacob-Madsen">
                    <h2 className="Author">Jacob's Posts</h2>
                    <Post
                        title="w3schools"
                        description="A great resource for exploring CSS properties as well as other useful topics."
                        link="https://www.w3schools.com/css/default.asp"
                    />
                    <Post
                        title="GetBootstrap"
                        description="Helpful documentation for using bootstrap components."
                        link="https://getbootstrap.com/docs/4.1/components"
                    />
                </div>

                <div className="Shreya-Thammana" id="Shreya-Thammana">
                    <h2 className="Author">Shreya's Posts</h2>
                    <Post
                        title="MDN Web Docs"
                        description="A great resource for learning the basics of HTML, CSS, and JS and their properties."
                        link="https://developer.mozilla.org/en-US/"
                    />
                    <Post
                        title="CSS Cheatsheet"
                        description="Exactly what it sounds like! Find ways to style your React App using tips from this interactive website."
                        link="https://htmlcheatsheet.com/css/"
                    />
                </div>

                <div className="Mari-Kilgus" id="Mari-Kilgus">
                    <h2 className="Author">Mari's Posts</h2>
                    <Post
                        title="Stack Overflow"
                        link="https://stackoverflow.com/"
                        description="Question and answer site for programmers on a wide variety of topics in computer programming."
                        />
                        <Post
                        title="Zapier"
                        link="https://zapier.com/?utm_source=google&utm_medium=cpc&utm_campaign=gaw-usa-nua-search-trademark-brand_exact&utm_adgroup=brand-zapier&utm_term=zapier&utm_content=_pcrid_432259313168_pkw_zapier_pmt_e_pdv_c_slid__pgrid_93034147589_ptaid_kwd-298647606221_&gclid=Cj0KCQjww_f2BRC-ARIsAP3zarElGu8bUo8PstvicdxtXcsxSlt7bORzEUj3r-53gQiuvHFzmtanoHoaArrKEALw_wcB"
                        description="Connects apps and moderates workflows. Helpful because users post helpful blog posts."
                        />
                </div>

                <div className="Armando-Partida" id="Armando-Partida">
                    <h2 className="Author">Armando's Posts</h2>
                    <Post
                        title="Github"
                        description="Very helpful to look at many different implementations of the same thing. Also fun to look at multiple projects found there."
                        link="https://github.com/"
                    />
                    <Post
                        title="GeeksforGeeks"
                        description="Most of the time when I'm having trouble with an algorithm I go here to look at their implentations and explanations."
                        link="https://www.geeksforgeeks.org/"
                    />
                </div>
            </div>
        );
    }
}
