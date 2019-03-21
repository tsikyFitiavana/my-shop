import React from 'react';
import ImageUploader from 'react-images-upload';
 
class ImageUpload extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = './images'
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
    render() {
        return (
            <div>
            <ImageUploader
                withIcon={true}
                buttonText='file'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
            />
            <img src='' alt="hello world"/>
            </div>
        );
    }
} 
export default ImageUpload