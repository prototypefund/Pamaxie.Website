import React from 'react';
import ErrorPage from '../../components/ErrorPage'

import image from '../../assets/img/feature-3-image.png'

export default function DataDetection() {
    return (
        <ErrorPage
            headerText="502 - Bad Gateway"
            image={image}
            innerHtml="Some of our backends seems to have an issue and can’t tell us some of the information, you’re looking for right now. Please check the service status if this issue is known, if not feel free to reach out to us.">
        </ErrorPage>
    )
}