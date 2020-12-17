import Head from 'next/head'

const styles = {}

export default function Home() {
    return (
        <div>
            <div id="nav-container"></div>
            <img
                src="img/rome_basic.jpg"
                alt="Photo by Mike Andrei from Pexels"
                className="parallax"
                id="first-img"
            />
            <h1
                className="central-header"
                id="first-header"
            >Phillips Academy’s Classics Magazine</h1>
            <div
                className="parallax"
                id="mission"
            >
                <br />
                <div id="founder-letter-content">
                    <p>
                        Welcome to Andover Athenaeum, Phillips Academy’s
                        Classics Magazine! This is a place for discussion,
                        creativity, and general awareness of the Classics, both
                        at Andover and in the world. In this installment, we
                        focus on Broadening Our View of the Classics.

                        Classics, the study of Ancient Greek and Latin and their
                        respective history, philosophy, and literature, is one
                        of the cornerstones of the Humanities. Its profound
                        impact on areas such as law, politics, and philosophy is
                        clear even in the modern day, more than two millennia
                        later. The works of Homer, Aristotle, Ovid, Virgil,
                        Marcus Aurelius, and countless others have been
                        recreated and referenced in all aspects of the modern
                        world, whether it be literature, architecture, or
                        politics.

                        The impact of the Classics is prominent on our campus:
                        the Doric columns of Samuel Phillips Hall, the
                        graduation awards (cum laude, magna cum laude, summa cum
                        laude), and our school mottos (non sibi, finis origine
                        pendet). The roots of the Classical languages are seen
                        everyday in Bulfinch Hall (Over 60% of English has
                        Ancient Greek or Latin roots), Euclidean Geometry is
                        hard to miss in our introductory mathematics courses,
                        and the resounding echoes of the Julian calendar are
                        unmistakable as we plan out our weeks in Andover
                        planners.

                        Pearson Hall stands proudly in the school’s busiest
                        quadrangle, flanked by its frosh-faced counterparts
                        Morse Hall and Oliver Wendell Holmes Library (OWHL). It
                        has been the home of Phillips Academy’s Classics
                        Department for over 200 years and recently welcomed the
                        Tang Institute and Academic Skills Center during the
                        OWHL renovation as well. Not many high schools, let
                        alone universities in the world have their own Classics
                        building.

                        And yet, interest in the Classics has declined severely
                        throughout the 20th and early 21st centuries. It has
                        been abandoned and neglected by many, viewed as a
                        subject for elites and “people with nothing else better
                        to do.” Ancient Greek and Latin are “dead languages.”
                        That is the harsh reality of the modern perspective of
                        Classics, both at Andover and in the world as a whole.

                        Andover Athenaeum is here to revitalize our collective
                        understanding and perspective on the Classics. You’ll
                        read about the new and upcoming students and researchers
                        in the Classics world, some who reside on this very
                        campus. You’ll immerse yourself in dozens of literary
                        compositions and essays written by students, alumni, and
                        other Classicists in the world. You’ll even get to read
                        about the impact of Classics on this very campus,
                        whether it be the variety of inscriptions scattered
                        across campus or the physical heart of Classics here at
                        Phillips Academy: Pearson Hall.

                        Welcome to the world of the Classics in Andover
                        Athenaeum!
                    </p>
                </div>
            </div>
            <div id="footer-container"></div>
        </div>
    )
}
