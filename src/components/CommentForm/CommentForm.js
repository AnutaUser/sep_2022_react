import React, {useEffect} from 'react';
import {joiResolver} from '@hookform/resolvers/joi';
import {useForm} from 'react-hook-form';

import {commentsRequest} from '../../api';
import {commentValidator} from '../../validators';

const CommentForm = ({setComments, updateComment}) => {

    const {register, reset, handleSubmit, setValue, formState:{errors, isValid}} = useForm({
        mode: "all",
        resolver: joiResolver(commentValidator),
    });

    const submit = async (comment) => {
        const {data} = await commentsRequest.create(comment);
        setComments(prev => [...prev, data]);
        reset();
    };

    useEffect(() => {
        if (updateComment) {
            setValue('email', updateComment.email);
            setValue('name', updateComment.name);
        }
    }, [updateComment, setValue]);

    const update = async (arg) => {
        const {data} = await commentsRequest.update(updateComment.id, arg);
        console.log(data);
        if (data) {
            const {data} = await commentsRequest.getAll();
            setComments(data);
        }
    };

    return (
        <div style={{textAlign:'center'}}>
            <form onSubmit={handleSubmit(!!updateComment ? update : submit)}>

                <div>
                    <input type="text" placeholder={'name'} {...register('name')}/>
                    {errors.name && <span>{errors.name.message}</span>}
                </div>

                <div>
                    <input type="text" placeholder={'email'} {...register('email')}/>
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                <button disabled={!isValid}>{!!updateComment ? 'update' : 'create'}</button>

            </form>
        </div>
    );
};

export {CommentForm};
