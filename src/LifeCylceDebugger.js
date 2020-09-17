function PreCommit(lifecycle, nextProps = '--', nextState = '--', props = '--', state = '--') {
   this.lifeCycleMethod = lifecycle
   this.nextProps = nextProps
   this['this.props'] = props
   this.nextState = nextState
   this['this.state'] = state
}

function PostCommit(lifecycle, prevProps = '--', prevState = '--', props = '--', state = '--') {
   this.lifeCycleMethod = lifecycle
   this.prevProps = prevProps
   this['this.props'] = props
   this.prevState = prevState
   this['this.state'] = state
}

export {
   PreCommit,
   PostCommit
}