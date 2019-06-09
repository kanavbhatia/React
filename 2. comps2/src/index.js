import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=>{
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail 
                    author='Kanav' 
                    image ={faker.image.avatar()} 
                    timeAgo='Today at 5 PM'  
                    comment='nice'
                />
            </ApprovalCard>
            
            <ApprovalCard>
            <CommentDetail 
                author='Bhatia' 
                image ={faker.image.avatar()} 
                timeAgo='Today at 2 PM' 
                comment='not nice' 
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author='Mr Bhatia' 
                image ={faker.image.avatar()} 
                timeAgo='Today at 1 AM' 
                comment='good' 
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author='Mrs Bhatia' 
                image ={faker.image.avatar()} 
                timeAgo='Yesterday at 8 AM' 
                comment='not good' 
            />
            </ApprovalCard>
            <ApprovalCard>Whatsup Kanav!</ApprovalCard>
        </div>
        

        
    )
};

ReactDOM.render(<App />, document.querySelector('#root')); 