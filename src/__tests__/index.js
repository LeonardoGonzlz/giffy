import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App'

test('search form could be used', async () => {
    render(<App />)
    const input = await screen.findByRole('textbox')
    
/*
---- Falta el botton de searc para poder hacer el tests ----

    const button = await screen.findByRole('button')
    fireEvent.change(input, {target: {value: 'Matrix'}})
    fireEvent.click(button)

    const title = await screen.findByText('Matrix')

*/

    expect(input).toBeVisible()
})