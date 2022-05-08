import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import React from "react";
import {Profile} from "./Profile";
import {getUserProfile, ProfileType} from "../../redux/profileReducer";
import {withRouter} from "./withRouter";

export type mapStateToPropsType = {
    profile: ProfileType
}
export type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.router.params['*']
        if (!userId) {
            userId = 23432
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {getUserProfile})(WithUrlDataContainerComponent)