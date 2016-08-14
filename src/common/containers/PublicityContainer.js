import { Component } from 'react';
import { connect } from 'react-redux';
import { getPublicities } from '<common/actions>';
import PublicityComponent from '<common/components>/PublicityComponent';

class PublicityContainer extends Component {
    static needs() {
        return [
            getPublicities,
        ];
    }

    render() {
        if (!this.props.publicities || this.props.publicities.size === 0) {
            return null;
        }

        return (
            <section>
                {
                    this.props.publicities.map(publicity =>
                        <PublicityComponent key={publicity.get('_id')} publicity={publicity} />
                    )
                }
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    publicities: state.getIn(['publicities', 'data', 'publicities']),
});
const mapDispatchToProps = () => ({});

export default
    connect(mapStateToProps, mapDispatchToProps)(
        PublicityContainer
    );
