import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { Router } from 'express';
import { DietDetailComponent } from '../../diet/diet-detail/diet-detail.component';
import { DietComponent } from '../../diet/diet.component';

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
  const key = localStorage.getItem('usuarioLogado');
  const id = localStorage.getItem('id');
  Number(id);
  if (key && id) {
    return true;
  }
  return false;
};
