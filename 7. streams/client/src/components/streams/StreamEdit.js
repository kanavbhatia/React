import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import { fetchStream, editStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) =>{
        // console.log(formValues);
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        if(this.props.stream){
            return (
                <div>
                    <h3>Edit a form</h3>
                    <StreamForm 
                        // initialValues={{'title':'Kanav', 'description': 'Bhatia'}}
                        // initialValues me title and description check hoga streamform ke form name ke sath jo title and description hai
                        // and if it matches to vha par inki values chali jayegi
                        
                        // or we can directly pass the stream object usme se vo khud values lelega unnki
                        // initialValues={this.props.stream}

                        // or we can use this approach so that we only get title and description.
                        initialValues = {_.pick(this.props.stream, 'title', 'description')}
                        onSubmit={this.onSubmit}
                    />
                </div>
            ) 
        }
        else{
            return <div>Loading...</div>
        }
        
    }
    
}


const mapStateToProps = (state, ownProps) =>{
    return ({stream: state.streams[ownProps.match.params.id] })
}

export default connect(mapStateToProps,
    {fetchStream, editStream}
    )(StreamEdit);

//Before StreamForm

// import React from 'react';
// import {connect} from 'react-redux';
// import { fetchStream} from '../../actions';

// class StreamEdit extends React.Component{

//     componentDidMount(){
//         this.props.fetchStream(this.props.match.params.id)
//     }

//     render() {
//         if(this.props.stream){
//             return (
//                 <div>{this.props.stream.title} </div>
//             ) 
//         }
//         else{
//             return <div>Loading...</div>
//         }
        
//     }
    
// }

// const mapStateToProps = (state, ownProps) =>{
//     return ({stream: state.streams[ownProps.match.params.id] })
// }

// export default connect(mapStateToProps,
//     {fetchStream}
//     )(StreamEdit);