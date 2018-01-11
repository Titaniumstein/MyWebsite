import Skill from 'models/Skill';
import Experience from 'models/Experience';
import ExpItem from 'models/ExpItem';



const pickApp = new Experience(
    1,
    "2017",
    "PickApp Hockey",
    "Project, Toronto, ON",
    [
        new ExpItem(
            0,
            "A web application (SPA) for improving shinny in Toronto"
        ),
        new ExpItem(
            1,
            "The frontend was developed using React, Redux, Material-UI (React Toolbox), and D3 (Recharts)"
        ),
        new ExpItem(
            1,
            "The backend was built on Node, which exposed API through Express for handling hockey data (rinks, players, playtime)"
        ),
        new ExpItem(
            1,
            "Isomorphic JavaScript was used to assist in client-server Communication"
        ),
    ]
    );

const financeApp = new Experience(
    1,
    "2017",
    "FinanceManagerApplication",
    "Project, Toronto, ON",
    [
        new ExpItem(
            0,
            "A web application for tracking monetary expenses (FinanceManagerApplication)"
        ),
        new ExpItem(
            1,
            "The frontend was developed using ASP.NET MVC, Bootstrap, and jQuery"
        ),
        new ExpItem(
            1,
            "The backend was composed of a single bounded context (FinanceContext) for handling financial data"
        ),
        new ExpItem(
            1,
            "Client-server communication was enabled through WCF and RabbitMQ"
        ),
        new ExpItem(
            1,
            "Cross-cutting concerns such as logging, caching, and performance metrics were implemented through aspect-oriented programming"
        )
    ]
    );

    const podiatryApp = new Experience(
        1,
        "2017",
        "Podiatry Application",
        "Project, Toronto, ON",
        [
            new ExpItem(
                0,
                "A multi-user desktop application for managing a podiatry practice (PodiatryApplication)"
            ),
            new ExpItem(
                1,
                "The frontend was developed using WPF and WinForms based on the Model-View-Presenter (MVP) pattern"
            ),
            new ExpItem(
                1,
                "The backend was composed of two separate bounded contexts (PatientContext, FinanceContext) for handling patient and financial data"
            ),
            new ExpItem(
                1,
                "Communication between the frontend and backend was achieved through WCF"
            ),
            new ExpItem(
                1,
                "Cross-cutting concerns such as logging, caching, and performance metrics were implemented through aspect-oriented programming"
            )
        ]
    );

    const CRG = new Experience(
        1,
        "2014-2016",
        "Research Associate",
        "Cornerstone Research Group Inc., Burlington, ON",
        [
            new ExpItem(
                0,
                "Programmed economic models in Excel using VBA with the objective of demonstrating cost-effectiveness for various pharmaceutical products and medical devices"
            ),
        ]
    );



export default [pickApp, financeApp, podiatryApp, CRG];
