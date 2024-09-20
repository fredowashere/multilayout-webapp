import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'appd-dynamic-form-basic',
    standalone: true,
    imports: [CommonModule, SharedModule],
    templateUrl: './dynamic-form-basic.html',
    styles: [``]
})
export class AppdDynamicFormBasic {
    jsonSchema1 = [
        {
            "field": "temperature",
            "label": "Temperature",
            "helper": "The creativity value of the model",
            "type": "range",
            "value": 1,
            "min": 0,
            "max": 1,
            "step": 0.1
        },
        {
            "field": "max_tokens",
            "label": "Length",
            "helper": "Maximum number of tokens that can be generated in the chat completion",
            "type": "range",
            "value": 100,
            "min": 10,
            "max": 1000,
            "step": 5
        },
        {
            "field": "top_p",
            "label": "Diversity",
            "helper": "An alternative to sampling with temperature, called nucleus sampling.",
            "type": "range",
            "value": 1,
            "min": 0,
            "max": 1,
            "step": 0.1
        }
    ];
    jsonOut1 = {};

    jsonSchema2 = [
        {
            "field": "height",
            "label": "Height",
            "helper": "The input height of the images",
            "type": "range",
            "value": 512,
            "min": 512,
            "max": 1024,
            "step": 8
        },
        {
            "field": "width",
            "label": "Width",
            "helper": "The input width of the images",
            "type": "range",
            "value": 512,
            "min": 512,
            "max": 1024,
            "step": 8
        },
        {
            "field": "guidance_scale",
            "label": "Guidance Scale",
            "helper": "How strongly the generation should reflect the prompt",
            "type": "range",
            "value": 7,
            "min": 1,
            "max": 20,
            "step": 1
        },
        {
            "field": "presetStyle",
            "label": "Style",
            "helper": "The style to generate images with",
            "type": "select",
            "value": "NONE",
            "options": [
                {
                    "text": "ANIME",
                    "value": "ANIME"
                },
                {
                    "text": "CREATIVE",
                    "value": "CREATIVE"
                },
                {
                    "text": "DYNAMIC",
                    "value": "DYNAMIC"
                },
                {
                    "text": "ENVIRONMENT",
                    "value": "ENVIRONMENT"
                },
                {
                    "text": "GENERAL",
                    "value": "GENERAL"
                },
                {
                    "text": "ILLUSTRATION",
                    "value": "ILLUSTRATION"
                },
                {
                    "text": "PHOTOGRAPHY",
                    "value": "PHOTOGRAPHY"
                },
                {
                    "text": "RAYTRACED",
                    "value": "RAYTRACED"
                },
                {
                    "text": "RENDER_3D",
                    "value": "RENDER_3D"
                },
                {
                    "text": "SKETCH_BW",
                    "value": "SKETCH_BW"
                },
                {
                    "text": "SKETCH_COLOR",
                    "value": "SKETCH_COLOR"
                },
                {
                    "text": "NONE",
                    "value": "NONE"
                }
            ]
        }
    ];
    jsonOut2 = {};
}
