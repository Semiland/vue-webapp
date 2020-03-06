<template>
    <div>
        <div class="container mx-auto px-8 lg:px-48">
      <h2 class="text-3xl font-bold">{{ $t('about.title') }}</h2>

      <p class="mt-4" v-html="$t('about.content')" />

      <v-container class="my-5">
          
        <v-layout column>
            <v-flex xs12 md6>
              <v-btn outline block class="primary">1</v-btn> 
            </v-flex>
        </v-layout>

      </v-container>
    </div>
    </div>
</template>


