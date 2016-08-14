import { Component } from 'react';
import { connect } from 'react-redux';
import { getPublicity } from '<common/actions>';

class PublicityItemContainer extends Component {
    static needs() {
        return [
            getPublicity,
        ];
    }

    render() {
        if (!this.props.publicity || this.props.publicity.size === 0) {
            return null;
        }

        return (
            <section>
                <h2>{this.props.publicity.get('title')}</h2>
                <p>
                    {this.props.publicity.get('description')}
                </p>
                <p>
                    <a target="_blank" href={this.props.publicity.get('link')}>{this.props.publicity.get('link')}</a>
                </p>
                <p>
                    {this.props.publicity.get('images').map(image => <img src={image.get('link')} />)}
                </p>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    publicity: state.getIn(['publicity', 'data', 'publicity']),
});
const mapDispatchToProps = () => ({});

export default
    connect(mapStateToProps, mapDispatchToProps)(
        PublicityItemContainer
    );
