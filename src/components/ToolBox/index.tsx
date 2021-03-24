import React from 'react';
import VisitSchedulerModal from '../VisitScheduler';
import {Container} from './styles'

export default function ToolBox() {
    return (
        <Container>
            <VisitSchedulerModal userId = {"123"}/>
        </Container>
    )
}