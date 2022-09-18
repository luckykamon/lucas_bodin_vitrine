import React, {useEffect} from "react";
import $ from "jquery";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

const App = () => {

    const [state, setState] = React.useState({
        foo: "bar",
        resumeData: {},
    })

    useEffect(() => {
        $.ajax({
            url: "/resumeData.json",
            dataType: "json",
            cache: false,
            success: function (data) {
                setState({resumeData: data});
            },
            error: function (xhr, status, err) {
                console.log(err);
                alert(err);
            },
        });
    }, [])

    return (
        <div className="App">
            <Header data={state.resumeData.main}/>
            {/*<About data={state.resumeData.main}/>*/}
            <Resume data={state.resumeData.resume}/>
            <Contact data={state.resumeData.main}/>
            <Footer data={state.resumeData.main}/>
        </div>
    );

}

export default App;
