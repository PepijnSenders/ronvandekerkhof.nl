import { Component } from 'react';
import { connect } from 'react-redux';
import { getPublicities } from '<common/actions>';

class PublicityContainer extends Component {
    static needs() {
        return [
            getPublicities,
        ];
    }

    render() {
        if (!this.props.dates || this.props.dates.size === 0) {
            return null;
        }

        return (
            <section>
                {
                    this.props.dates.map(date =>
                        <PublicityComponent key={date.get('_id')} date={date} />
                    )
                }
            </section>
        );
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default
    connect(mapStateToProps, mapDispatchToProps)(
        PortfolioContainer
    );
