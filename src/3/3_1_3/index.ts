type State = {
    isEditing: boolean;
    firstName: string;
    lastName: string;
};

let internalState: State = {
    isEditing: false,
    firstName: 'Jane',
    lastName: 'Jacobs'
};

// Greeting message
let messageEl: HTMLParagraphElement = document.createElement('p');
messageEl.innerHTML = `<i>Hello, 
    ${internalState.firstName} 
    ${internalState.lastName}
!</i>`;

export const state = new Proxy(internalState, {
    set(target: State, prop: keyof State, value: any) {
        if ((prop === 'firstName' || prop === 'lastName') && typeof value === 'string') {
            target[prop] = value;
            if (messageEl) {
                messageEl.innerHTML = `<i>Hello, ${target.firstName} ${target.lastName}!</i>`;
            }
        }
    
        if (prop === 'isEditing' && typeof value === 'boolean') {
            target.isEditing = value;
            render();
        }
    
        return true;
    }
});

export function render() {
    const root = document.getElementById('container');
    if (!root) return;
    root.innerHTML = '';

    const form = document.createElement('form');

    // First Name
    const firstLabel = document.createElement('label');
    firstLabel.textContent = 'First name: ';
    if (state.isEditing) {
        const input = document.createElement('input');
        input.value = state.firstName;
        input.oninput = (e: Event) => {
            const target = e.target as HTMLInputElement;
            state.firstName = target.value;
        };
        firstLabel.appendChild(input);
    } else {
        const bold = document.createElement('b');
        bold.textContent = state.firstName;
        firstLabel.appendChild(bold);
    }

    // Last Name
    const lastLabel = document.createElement('label');
    lastLabel.textContent = 'Last name: ';
    if (state.isEditing) {
        const input = document.createElement('input');
        input.value = state.lastName;
        input.oninput = (e: Event) => {
            const target = e.target as HTMLInputElement;
            state.lastName = target.value;
        };
        lastLabel.appendChild(input);
    } else {
        const bold = document.createElement('b');
        bold.textContent = state.lastName;
        lastLabel.appendChild(bold);
    }

    // Button
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = state.isEditing ? 'Save Profile' : 'Edit Profile';
    button.onclick = () => {
        state.isEditing = !state.isEditing;
    };

    form.append(firstLabel, lastLabel, button, messageEl);
    root.appendChild(form);
}