<template>
    <v-form>
        <v-row>
            <v-col cols="12" md="3">
                This will be an image
            </v-col>
            <v-col cols="12" md="9">
                <v-text-field
                    label="Event Title"
                ></v-text-field>
                <v-text-field
                    label="Game"
                ></v-text-field>
                <v-text-field
                    label="Experience Summary"
                ></v-text-field>
                <v-text-field
                    label="Score"
                ></v-text-field>
                <v-slider
                label="Rating"
                step="1"
                ></v-slider>
                <v-slider
                label="Weight"
                step="1"
                ></v-slider>
                <v-checkbox
                label="Is Winner"
                ></v-checkbox>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-textarea label="Strategy"></v-textarea>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col cols="12" md="10">
                <v-file-input label="File Upload"></v-file-input>
            </v-col>
            <v-col cols="12" md="2">
                <v-btn>Submit</v-btn>
            </v-col>
        </v-row>

    </v-form>
</template>