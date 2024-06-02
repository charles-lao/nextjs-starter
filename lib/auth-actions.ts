'use server';

import { redirect } from 'next/navigation';
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByUserName } from "@/lib/user";
import { createAuthSession, destroySession } from '@/lib/auth';



export async function signup(prevState, formData: FormData) {
    const userName = formData.get('username');
    const password = formData.get('password');

    let errors = {};

    // if(!email.includes('@')) {
    //     errors.email = 'Please enter a valid email address.';
    // }

    // if (password.trim().length < 8) {
    //     errors.password = 'Password must be at least 8 characters long.';
    // }

    if (Object.keys(errors).length > 0) {
        return {
            errors,
        };
    }

    const hashedPassword = hashUserPassword(password);
    try {
        const id = createUser(userName, hashedPassword);
        await createAuthSession(id);
        redirect('/training');
    } catch (error) {
        if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            return {
                errors: {
                    email: 'It seems like an account for the chosen email already exists.'
                }
            };
        }
        throw error;
    }

    
}


export async function login(prevState: any, formData: FormData) {
    const userName = formData.get('username');
    const password = formData.get('password');

    if (typeof userName !== 'string') {
        // Handle the case where userName is null or not a string
        return {
          errors: {
            username: 'Please provide a valid username.',
          },
        };
    }

     const existingUser = getUserByUserName(userName);

     if (!existingUser) {
        return {
            errors: {
                email: 'Could not authenticate user, please check your credentials.'
            },
        };
     }


     const isValidPassword = verifyPassword(existingUser.password, password);

     if (!isValidPassword) {
        return {
            errors: {
                password: 'Could not authenticate user, please check your credentials.'
            },
        };
     }


    await createAuthSession(existingUser.id);
    redirect('/dashboard');

    return prevState;
}


export async function logout() {
    await destroySession();
    redirect('/');
}