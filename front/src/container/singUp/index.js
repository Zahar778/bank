import React from 'react';
import "./index.css"
import BackButton from '../../component/button_back';
import authentication_text_wow from '../../component/authenticationText';

export default function SingUp ({}) {
    return ( 
        <div className='wellcomePage'>
              <BackButton className='back_button'/>
              <div class="page page--background">

	<form class="page__section">
		<h1 class="page__title">Реєстрація</h1>

		<div class="form">
			<div class="form__item">
            <div class="field">
	        <label for="{{name}}" class="field__label">{}</label>
	        <input oninput="{{action}}(this.name, this.value)" type="{{type}}" class="field__input validation" name="{{name}}"
		    placeholder="{{placeholder}}"> </input>
                </div>
			</div>
		</div>

		<button onclick="signupForm.submit()" class="button button--disabled" type="button">Зареєструватися</button>

		<span class="alert alert--disabled">Внимание, ошибка!</span>

		<span class="link__prefix">Маєте акаунт? <a href="/login" class="link">Увійти</a></span>

	</form>
</div>
        </div>
    )
}
