import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';
import { DietComponent } from '../../diet/diet.component';

export const authGuard: CanActivateFn = (route, state) => {
  const key = localStorage.getItem('usuarioLogado');
  if (key) {
    return true;
  }

  return false;
};
