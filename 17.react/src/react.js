import Nerv from 'nervjs'
class HelloMessage extends Nerv.Component {
    render() {
        return <div>Hello {this.props.name}</div>
    }
}

Nerv.render(
    <HelloMessage name="Nerv" />,
    document.getElementById('app')
)
